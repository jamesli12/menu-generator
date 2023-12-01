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

## Requirements

## Design

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
