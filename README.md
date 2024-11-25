# resume-paper

## why
- 이력서 pdf파일이 필요할 때
- json포맷의 이력을 수정하고 싶을 때
- 프린트한 이력서가 어떻게 보일지 궁금 할 때
- 영어/한국어 2가지 버젼의 이력서가 모두 필요할 때
- 이력서의 링크를 공유해야 할 때

## goal
- [x] en/kr
- [x] download pdf
- [x] json to html
- [ ] deploy aws free tier
- [ ] dockerize.
- [ ] simple dark/light/system theme button > 추후 추가
- [x] vanilla extract css
- [ ] responsive design mobile/web > 추후 추가
- [ ] inverted tab logo icon > 취소
- [x] little icons for buttons
- [x] setting button gap
- [x] grid for section name and section items
- [x] separate 3 parts in main.ts
- [x] separate paper into 5 parts.
- [ ] read json file when user provided > 추후 추가
- [ ] share button will provide the printable pdf file. > 추후 추가

## idea reference

- [rxresu](https://rxresu.me/)

## problems and choices 개발일지

- jsPdf를 사용하면 한국어 폰트가 깨짐. 해결: fontFamily를 더함.
- jsPdf를 사용하면 링크가 죽어버림.
- jsPdf를 사용할 지, window.print()를 사용할지 결정해야 함.
- window.print()를 사용하기로 결정
- svg사이즈가 안 줄어듬. inline 스타일 추가.
- 과연 사람들이 json포맷의 이력을 사용할까?라는 의문이 듬.
- theme button이 예상대로 작동을 하지 않음.
- react를 사용하지 않으니 renderApp()을 계속 사용해서 전부 다 reload하는 그런 상황
- theme버튼을 걷어냄.
- 모바일 버전은 추후 추가.
- json upload 기능은 추가하지 않고, 내 이력서를 보여주고 링크를 공유하는 것에 초점을 맞춤.
- aws ecr에 docker image를 업로드 할 수 있지만 ec2에서 자동으로 새로운 image를 반영한 container를 생성할 수 없음.
  

## how to run

```zsh
# local
$ git clone https://github.com/minju25kim/resume-paper
$ npm i
$ npm run dev
```

## Built With

- vite
- vanilla-typescript
- vanilla-extract(css)

## JSON format

<details>
<summary>JSON 보기/접기</summary>

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
</details>
```

## License
