
# Course-Hub

This is a course-hub project made with React.
It has a functional login, a Home Page, a Course-search page, 
Course-Enroll page and Course-management for teachers and admin users.

## Features

- Login
A complete functional login function, that allows different users with different roles access this course hub and
watch courses, manage courses (if you are a teacher or a admin), etc.  
- Home  
Display course, sample images and a login option.
- Course Search  
Searching courses, filtering by side menu and navigate to Course Detail.
- Dashboards  
Display student-dashboard, teacher-dashboard, admin-dashboard by the login info
- Course administration  
The admin dashboard must allow the user to add, edit, and delete courses. Once the course information is updated, it will appear in the course list.


## Run Locally

Clone the project

```bash
  git clone https://github.com/MatheusPaternez/course-hub-react-app
```

Go to the project directory

```bash
  cd course-hub-react-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Repo-Structure

- main  
mostly invloves scrum documents
- Sprint1  
  basic page Design & UI with react
- Sprint2  
  CORE CRUD Course management, Course Search,login
- Sprint3  
  CSS polish, code polish
## API & DB

## API Reference

#### Get all courses

```http
  GET /api/courses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `N/A` | `---` | `---` |

#### Get course details

```http
  GET /api/course-detail
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `N/A`      | `---` | `---` |

#### Get mywork data


```http
  GET /api/mywork
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `N/A`      | `---` | `---` |


## E-R database

#### COURSES
| COLUMN | Type     | KEY               |
| :-------- | :------- | :------------------------- |
| `id` | `String` | `✓` |
| `author` | `String` | `---` |
| `category` | `String` | `---` |
| `title` | `String` | `---` |
| `rating` | `double` | `---` |
| `level` | `Number` | `---` |
| `image` | `String` | `---` |

#### COURSES-DETAIL
| COLUMN | Type     | KEY               |
| :-------- | :------- | :------------------------- |
| `id` | `String` | `✓` |
| `courseOverview` | `String` | `---` |
| `whatYouWillLearn` | `String` | `---` |
| `curriculum` | `Array[String]` | `---` |

#### MY-WORK
| COLUMN | Type     | KEY               |
| :-------- | :------- | :------------------------- |
| `courseId` | `String` | `✓` |
| `author` | `String` | `---` |
| `workTitle` | `String` | `---` |
| `like` | `double` | `---` |
| `team` | `String` | `---` |
| `category` | `String` | `---` |
| `imgPath` | `String` | `---` |
| `status` | `String` | `---` |
| `grade` | `double` | `---` |  

## Material of Backlogs

- [Scrum-kanban (Trello)](https://trello.com/b/EkXW1ghb/apixfamily-kanban)

- [Figma](https://www.figma.com/design/38NwcZ9YrR6ds8CT7imP0t/Final-Project_Course-hub?node-id=1-620&p=f&t=IWVQu6bzu3Sx8wwt-0)

- [Data structures](https://docs.google.com/spreadsheets/d/18v7oqdJ9FNG5TtMjKZ4cLmUq4fGoFygxiAWM-Kv3Clo/edit?gid=1682386802#gid=1682386802)
## Authors

- [@MatheusPaternez](https://github.com/MatheusPaternez)
- [@Tianaaaaa](https://github.com/tianakim7691-netizen)
- [@kent2664](https://github.com/kent2664)
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
