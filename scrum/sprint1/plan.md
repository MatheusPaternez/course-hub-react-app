# Sprint 1 Plan

**Project:** Course-Hub  
**Sprint Goal:**basic design & responsive UI

## Sprint Dates
Start: 2025‑11‑03  
End: 2025‑11‑09

## Roles (Rotate each sprint)
- Product Owner: Tiana
- Scrum Master: Kenta
- Developers: Matheus

## Selected Stories (from Product Backlog)
| ID | Story | Priority | Estimate | Acceptance Criteria (summary) |
|---|---|---|---|---|
| 1 | As a new user, I want to see the information of class and new containts on Home page | High | 2 | The information about courses appears in list and persists on reload. |
| 2 | As a user, I want to login my page And See the overall information of my achievement. | High | 3 | Deleting removes item and updates totals. |
| 3 | As a user, I want to search the course that I want easily  | High | 3 | searching targets course and updates resuts. |
| 4 | As a user, I want to take an online Course. And I want see it is in progress or not | High | 3 | Listing sub corses  and updates the progress. |
| 5 | As a user, I want to see my Achievement and see the likes that my project got | High | 2 | Renders latest first; basic responsive layout. |

## Task Breakdown
| Story ID | Task | Owner | Estimate | Status (To‑Do/In‑Progress/Review/Done) |
|---|---|---|---|---|
| 1 | Build expense form (HTML/CSS) |  |  | Done |
| 4 | Build budget form (HTML/CSS) |  |  | Done |
| 1 | Hook form submit → JS handler |  |  | To‑Do |
| 1 | Save expense to LocalStorage |  |  | To‑Do |
| 4 | Save budget to LocalStorage |  |  | To‑Do |
| 3 | Render list from LocalStorage |  |  | To‑Do |
| 4 | Render the budget amount from LocalStorage |  |  | To‑Do |
| 2 | Implement delete action - expense (UI + JS) |  |  | To‑Do |
| 4 | Implement edit action - budget (UI + JS) |  |  | To‑Do |
| 5 | Basic responsive styling (mobile first) |  |  | Done |

## Definition of Done (reference)
See `../definition_of_done.md`.

## Risks / Assumptions
- Risk: Inconsistent LocalStorage schema → **Mitigation:** define a single `Coursefinished` array shape up front.
- Risk: Time underestimated for UI polish → **Mitigation:** keep styles minimal this sprint.
- Risk: Environment Setup for React, tailwindCSS → **Mitigation:** keep feature minimal this sprint.
