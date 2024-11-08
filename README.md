# resume-paper

## why
- 이력서 pdf파일이 필요할 때
- json포맷의 이력을 수정하고 싶을 때
- a4에서 이력서가 어떻게 보일지 궁금 할 때
- 영어/한국어 2가지 버젼의 이력서가 모두 필요할 때
- 이력서의 링크를 공유해야 할 때
- 이력서 자체를 공유해야 할 때

## goal
- [x] en/kr
- [x] download pdf
- [x] json to html
- [ ] deploy aws free tier
- [ ] dockerize.
- [ ] simple dark/light/system theme button
- [x] vanilla extract css
- [ ] responsive design mobile/web
- [ ] iiverted tab logo icon
- [x] little icons for buttons
- [x] setting button gap
- [x] grid for section name and section items
- [x] separate 3 parts in main.ts
- [x] separate paper into 5 parts.
- [ ] read json file when user provided
- [ ] share button will provide the printable pdf file.

## reference

- [rxresu](https://rxresu.me/)
- font awesome svg icons

## problems and choices

- jsPdf를 사용하면 한국어 폰트가 깨짐. 해결: fontFamily를 더함.
- jsPdf를 사용하면 링크가 죽어버림.
- jsPdf를 사용할 지, window.print()를 사용할지 결정해야 함.
- window.print()를 사용하기로 결정
- svg사이즈가 안 줄어듬. inline 스타일 추가.
- 과연 사람들이 json포맷의 이력을 사용할까?라는 의문이 듬.
-

## how to run

```zsh
# local
$ git clone github-link-here.git
$ npm i
$ npm run dev
```

## Built With

- vite
- typescript

## JSON format

- use this format to upload your json file.

```json
{
  "basics": {
    "name": "",
    "headline": "",
    "email": "",
    "phone": "",
    "location": "",
    "url": {
      "label": "",
      "href": ""
    },
    "customFields": [],
    "picture": {
      "url": "",
      "size": 64,
      "aspectRatio": 1,
      "borderRadius": 0,
      "effects": {
        "hidden": false,
        "border": false,
        "grayscale": false
      }
    }
  },
  "sections": {
    "education": {
      "name": "Education",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "education",
      "items": [
        {
          "id": "",
          "visible": true,
          "institution": "",
          "studyType": "",
          "area": "",
          "score": "",
          "date": "",
          "summary": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "experience": {
      "name": "Experience",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "experience",
      "items": [
        {
          "id": "",
          "visible": true,
          "company": "",
          "position": "",
          "location": "",
          "date": "",
          "summary": [""],
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "profiles": {
      "name": "Profiles",
      "columns": 3,
      "separateLinks": true,
      "visible": true,
      "id": "profiles",
      "items": [
        {
          "id": "",
          "visible": true,
          "network": "",
          "username": "",
          "icon": "",
          "url": {
            "label": "",
            "href": ""
          }
        }
      ]
    },
    "projects": {
      "name": "Projects",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "projects",
      "items": []
    },
    "skills": {
      "name": "Tech Stack",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "skills",
      "items": [
        {
          "id": "",
          "visible": true,
          "name": "",
          "description": "",
          "level": 0,
          "keywords": []
        }
      ]
    },
    "summary": {
      "name": "Summary",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "summary",
      "content": ""
    },
    "awards": {
      "name": "Awards",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "awards",
      "items": []
    },
    "certifications": {
      "name": "Certifications",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "certifications",
      "items": []
    },
    "volunteer": {
      "name": "Volunteering",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "volunteer",
      "items": []
    },
    "interests": {
      "name": "Interests",
      "columns": 3,
      "separateLinks": true,
      "visible": true,
      "id": "interests",
      "items": []
    },
    "languages": {
      "name": "Languages",
      "columns": 2,
      "separateLinks": true,
      "visible": true,
      "id": "languages",
      "items": []
    },
    "publications": {
      "name": "Publications",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "publications",
      "items": []
    },
    "references": {
      "name": "References",
      "columns": 1,
      "separateLinks": true,
      "visible": true,
      "id": "references",
      "items": []
    },
    "custom": {}
  }
}
```

## License
