from flask import Flask, request, jsonify, send_from_directory, url_for, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

@app.route('/submit', methods=['POST'])
def submit_form():
    restaurant_name = request.form.get('restaurantName')
    restaurant_slogan = request.form.get('restaurantSlogan')
    restaurant_logo = request.files.get('restaurantLogo')
    logo_filename = None

    if restaurant_logo:
        logo_filename = secure_filename(restaurant_logo.filename)
        restaurant_logo.save(os.path.join(app.config['UPLOAD_FOLDER'], logo_filename))

    food_items = []
    index = 0
    while True:
        title = request.form.get(f'foodItems[{index}].title')
        if not title:
            break
        description = request.form.get(f'foodItems[{index}].description')
        price = request.form.get(f'foodItems[{index}].price')
        picture = request.files.get(f'foodItems[{index}].picture')
        picture_filename = None

        if picture:
            picture_filename = secure_filename(picture.filename)
            picture.save(os.path.join(app.config['UPLOAD_FOLDER'], picture_filename))

        food_items.append({
            'title': title,
            'description': description,
            'price': price,
            'picture_filename': picture_filename
        })
        index += 1

    return render_template('menu.html', 
                           restaurant_name=restaurant_name, 
                           restaurant_slogan=restaurant_slogan,
                           restaurant_logo=logo_filename,
                           food_items=food_items)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True, port=5002)
