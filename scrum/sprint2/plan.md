# Sprint 1 Plan

**Project:** Course-Hub  
**Sprint Goal:**core feature & making pages

## Sprint Dates
Start: 2025‑11‑10  
End: 2025‑11‑14

## Roles (Rotate each sprint)
- Product Owner: Tiana
- Scrum Master: Kenta
- Developers: Matheus

## Selected Stories (from Product Backlog)
| ID | Story | Priority | Estimate | Acceptance Criteria (summary) |
|---|---|---|---|---|
| 1 | As a new user, I want to see the information of class and new contains on Home page | High | 2 | The information about courses appears in list and persists on reload. |
| 2 | As a user, I want to login my page And See the overall information of my achievement. | High | 3 | Correct overall infomation and display those |
| 3 | As a user, I want to search the course that I want easily  | High | 3 | searching targets course and updates resuts. |
| 4 | As a user, I want to take an online Course. And I want see it is in progress or not | High | 3 | Listing sub corses  |
| 6 | As a teacher, I want to see what course assigned me. | High | 3 | Display coursed and edit grades |
| 7 | As a Administrator , I want to edit course information and add new course | High | 3 | Add, edit, delete courses and display updated course infomation|
## Task Breakdown
| Story ID | Task | Owner | Estimate | Status (To‑Do/In‑Progress/Review/Done) |
|---|---|---|---|---|
| 3 | Make subvar with React |  |  | Done |
| 6 | Teacher Page : make with react component. |  |  | Done |
| 3 | Course Detail page : Display course Information And manage progress (Before the start / Progress / Finished) |  |  | In-Progress |
| 2 | Dash board : Displaying information Events,Mycourse, My work from data |  |  | Done |
| 4 | Course enroll page: implement the page with JSX(react) |  |  | Done |
| 4 | CouseSearchPage : search and Display courses(feature/Search-display) |  |  | Done |
| 2 | login : implemented to login function (feature/login) |  |  | Done |
| 4 | login : implemented to login function (feature/login) |  |  | Done |

## Definition of Done (reference)
See `../definition_of_done.md`.

## Risks / Assumptions
- Risk: Inconsistent LocalStorage schema → **Mitigation:** define a single `Coursefinished` array shape up front.
- Risk: Time underestimated for UI polish → **Mitigation:** keep styles minimal this sprint.
- Risk: Environment Setup for React, tailwindCSS → **Mitigation:** keep feature minimal this sprint.
- Risk: going to a complex account implementation  → **Mitigation:** using the accounts that is prepared
