# Menu Generator Project Report

CS 3300 (Fall 2023) Project 2 - Group 8

App Deployed @ [CS3300 Project 2](https://cs3300-gcp-assignment-401202.uc.r.appspot.com/)

## Introduction/Background

Imagine this: You are a restaurant owner who has invested considerable time, energy, and money into your dream restaurant. You have found the perfect location, signed the lease, invested in top-notch cooking equipment and a talented team of chefs and waiters, and crafted each dish to culinary perfection. Now, you face a new challenge – presenting your menu. You do not have any design experience, which makes this task even more difficult. Creating a menu requires design expertise, content development, and usually culminates in printed menus that are static and inflexible. This is where many restaurant owners feel held back, as their creative, culinary minds are bound to this rigid format. Here lies the problem we are addressing. In an industry that thrives on creativity and change, the traditional approach to menu design is no longer feasible. It is more than just an inconvenience – it is a barrier to truly showcasing what your restaurant has to offer. That is where our Menu Generator app comes in. We are not just simplifying menu creation, but we are making it dynamic and adaptable too. Our app streamlines the process of inputting dish details and images and automates menu design to ensure a professional and appealing presentation. Most importantly, it will save time and resources for restaurant owners.

In the development of our Menu Generator app, we adopted an Agile project management approach. Our team, comprising five members, including a project manager/scrum master, software developers, UI/UX designers, and a quality assurance tester, worked collaboratively in cross-functional roles. We structured our project into iterative sprints, each lasting a week, allowing us to continuously assess and adapt our strategy. This iterative process included phases of research, design, development, and testing, ensuring continuous improvement and alignment with user needs. This methodology not only facilitated a structured yet flexible development process but also ensured our final product truly matched the needs and expectations of our target users – the restaurant owners.

## Literature Review

In our review of modern restaurant technology trends, we have identified several key innovations that contextualize our Menu Generator app's unique value proposition. The growing adoption of AI for dynamic menu pricing and augmented reality (AR) for interactive digital menus reflects a shift towards more engaging and efficient customer experiences. Additionally, the integration of POS and payroll management software, along with Kitchen Display Systems (KDS), highlights the industry's focus on operational efficiency. Our app diverges from these trends by concentrating on the creative aspect of menu design, addressing the gap between culinary artistry and practical menu presentation, therefore offering a unique solution among current technological innovations.

## Software Technologies

| Components |            Technology             |
| :--------- | :-------------------------------: |
| Frontend   |      Vite 4.0, React 18.2.0       |
| Backend    | Flask 2.2.2, Java 17, QRCodeReact |
| Database   |            MongoDB 7.0            |
| Build      |                GCP                |

### Frontend Technologies

- **TypeScript & React**

  - **Purpose**: Main programming languages for frontend development.
  - **Justification**: TypeScript is a popular frontend programming language due to its reliability and maintainability. React's component-based model streamlines UI development.

- **Vite**
  - **Purpose**: Frontend development tool for local server.
  - **Justification**: Offers fast build times and an improved development experience.

### Backend Technologies

- **Flask**

  - **Purpose**: Core backend library.
  - **Justification**: Provides simplicity and flexibility for backend services.

- **MongoDB**

  - **Purpose**: Database management.
  - **Justification**: Its schema-less approach is ideal for managing dynamic content.

- **QRCodeReact**

  - **Purpose**: QR code generation.
  - **Justification**: Essential for creating accessible digital menus.

- **Google Cloud Platform (GCP)**
  - **Purpose**: Cloud integration for database.
  - **Justification**: Enhances scalability and performance of the application.

### Version Control

- **GitHub**
  - **Purpose**: Manage version control.
  - **Justification**: Facilitates effective team collaboration and code management.

## Project Lifecycle
  - ### 1. Conceptualization and Planning
    - ### Brainstorming and Idea Generation
      - The initial stage involved brainstorming the core problem that our Menu Generator app aimed to solve and identifying MMF of our project. This stage was crucial in defining the project's scope and objectives.
    - ### Project Planning
      - We developed a project plan, outlining the goals, timeline, resource allocation, and roles and responsibilities within the team. This stage was essential for ensuring that all team members were aligned with the project's direction.
  - ### 2. Research and Analysis
    - We evaluated technical aspects to ensure that our project was feasible and viable in the long run. We also researched some existing manu app to get some inspirations. This helped us in identifying the features that would make our app stand out.
  - ### 3. Design and Development
    - ### UI/UX Design
      - Our design team worked on creating user-friendly and visually appealing interfaces. Prototypes and wireframes were developed to visualize the app's layout and user flow.
    - ### Software Development
      - We used agile development with iterative design and coding sprints, which coule allow for flexibility and adaptability in development, facilitating a user-centric design and robust app functionality.
      - ### Frontend Development
        - We used TypeScript and React as our main programming languages. We used Vite as our frontend tool for our local development server.
      - ### Backend Development
        - We used Flask as our core backend library, complemented by MongoDB for database management. We used QRCodeReact to generate QR codes. Additionally, our database is integrated with GCP to enhance scalability and performance.
      - ### Version Control
        - Version control is managed through GitHub.
      - ### Cloud Deployment
        - Utilizing Google Cloud Platform, we deployed our app to ensure scalability and reliability.
  - ### 4. Testing
    - Comprehensive testing ensured a reliable and user-friendly product, enhancing overall quality.
    - ### White Box Testing
      - We used mostly unit testing, which tested primarily the login and registration functions using the requests library in Python.
    - ### Black Box Testing
      - We used Use Case Testing, and primarily testing basic flows that the user would go through. The test cases involved uploading menus with and without images, with single items, with different food allergies


## Requirements
  - ### Functional requirements:
    - #### Register page and Login page
      - Users can use their any email address to register a account in our website, the email address is the username of their account, the passwords are made by themselves.
      - To log in our website, they should provide their email addresses and passwords is enough, and if they don't want to repeat this step, they can allow the website save their username and passwords automatically.
    - #### Menu create page
      - Users can add, delete, edit anything dishes they want to put into their menus. 
      - For the owner who have multiple restaurants, these users can create as many as menus they want. 
    - #### QR code generator
      - After users provide the inputs about their dish items, our website can generate a unique qr code for each menu, after scan this code, customers can see the details of the menu on any mobile devices.
  
  - ### Unfunctional requirements:
      - #### Usability:
        - The application must be user-friendly, with a response time of no more than 3 seconds for any action. 
        - #### Compatibility:
        - Our website and qr code can compatible with the latest two versions of major browsers, like chrome, Safari
        - #### Portability:
        - Our website can easily protable acorss different operating system, such as Windows, macOS, and Linux, without significant modifications.
        - #### Performance Requirements
        - Our website can load less than 2 seconds under normal conditions. 
  - ### MMF
  1. QR code:
  This is the most significant MMF for our project, based on this QR code generators the restaurants allowed their customers know more informations just using their mobile phones, and our website is also user friendly.
  This feature automatically generates a QR code for the menu. Scanning the QR code with a mobile device would lead to a detailed view of the menu items, including their images and descriptions. This is useful for physical menus or display items where space is limited.
  2. View All User's Menus/QR code
  This feature automatically generates a QR code for the menu. Scanning the QR code with a mobile device would lead to a detailed view of the menu items, including their images and descriptions. This is useful for physical menus or display items where space is limited.
  3. User Registration and Login
  This feature allows users to create personal accounts and log in to the application. It includes functionality for handling user credentials securely and detecting faulty registration information.
## Design
<img width="660" alt="Screenshot 2023-12-01 at 7 07 05 PM" src="https://github.com/jamesli12/menu-generator/assets/144555686/033a9f75-83f6-4563-9c4e-dd732ecb8700">

##Class Diagram
<img width="560" alt="Screenshot 2023-12-01 at 7 16 06 PM" src="https://github.com/jamesli12/menu-generator/assets/144555686/7a5da083-ca10-442b-bf5e-76304e8ade0c">

##Architecture Diagram


In designing our Menu Generator app, we made pivotal decisions to enhance the functionality of the website. One such decision was the integration of QR code generation for the menus. This choice revolutionized the traditional menu concept, making it more accessible, easily changeable, cost-effective, and intelligent in functionality. Initially, we encountered challenges in displaying the QR code effectively. However, we resolved this by using an API that integrates QR generation and scanning capabilities into our app. 

Another significant design choice involved the input page, where restaurant owners can input detailed information about their dishes, including descriptions and images. This design will ensure that all necessary information could be included in the menu, making the menu both informative and appealing. The major challenge we faced for this design choice was actually the complexity of uploading multiple photos. While text submission was straightforward, managing multiple image uploads presented a technical challenge. After some online research and team collaboration, we developed a solution that streamlined this process, allowing for efficient and user-friendly photo uploads.

Last but not the least, we incorporated the functionality for users to create and manage multiple menus, a feature accessible from the menus page. This design choice addresses the dynamic needs of restaurants that often have multiple versions of their menu, whether for different meal times, special events, or seasonal offerings. Additionally, it facilitates easy updates and modifications. The all-in-one interface makes the process easier, allowing restaurant owners to effortlessly switch between various menus, update them as needed, and ensure their offerings are always current and accurately represented. 

## Testing

For the project, we used both white box testing and black box testing. For white box testing, we used mostly unit testing, which tested primarily the login and registration functions using the requests library in Python. An example of this test would be sending a login request with false data, then real data, and expecting an error on the first request, but the JWT token to be returned on the second request. We had also used Postman to test our endpoints, Postman is a simple REST API endpoint tester that allows the user to test various endpoints, we used Postman to test unauthorized endpoint accesses such as creating a menu with no login token, etc.

For black box testing, we used Use Case Testing, and primarily testing basic flows that the user would go through. The testing primarily covered menu creation, and ensuring the images that were uploaded are being properly sent to the GCP buckets, etc. The test cases involved uploading menus with and without images, with single items, with different food allergies, etc.

Testing allowed for us to quickly isolate the project, and figure out where our problems lie. When it came to the final project, we figured out, through a mix of test cases, that there were some adjustments we had to make to get the application running on GCP. Some of these adjustments included modifying the registration function, since it would take a bit longer on GCP to register than on localhost, and changing how we store login credentials for the GCP buckets. Those are some examples of various bugs we found out through the extensive testing that we had to do.

#### Landing Page

![image](https://cdn.discordapp.com/attachments/1088898204948512790/1179275544328679464/Screenshot_2023-11-28_at_11.19.50_PM.png?ex=657930ef&is=6566bbef&hm=178b880d304a4312f5396b335984d71eb1a5328925385894670ab6acd14b8a43&)

#### Login Page

![image](https://github.com/jamesli12/menu-generator/assets/91359766/f3e4ee67-438c-4d7e-9068-e9e126d60e34)

#### Sign Up Page

![image](https://github.com/jamesli12/menu-generator/assets/91359766/bde43fa0-7a98-49d5-98a6-5c8e1d3577ab)

#### Restaurant Data Collection

![image](https://cdn.discordapp.com/attachments/1088898204948512790/1179275095156461648/Screenshot_2023-11-28_at_10.56.05_PM.png?ex=65793084&is=6566bb84&hm=fc1aff743f57c75f2b76a843d01e1190f6592517230ce0b1cf03bde49dfb787e&)

#### Menu Item Data Collection

![image](https://cdn.discordapp.com/attachments/1088898204948512790/1179275243076988998/Screenshot_2023-11-28_at_10.56.19_PM.png?ex=657930a7&is=6566bba7&hm=4e916ca4318143fd76005cd3528723c4ecf1a7ee66a45f64006c456b9d89dd55&)

#### Menu and QR Code Generation

![ezgif-1-2002d20f82](https://github.com/jamesli12/menu-generator/assets/112535058/8a62bb4a-5383-4296-be3b-8c62146588e8)
