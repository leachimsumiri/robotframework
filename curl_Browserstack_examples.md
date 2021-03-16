get all projects:
curl -u "xxx:xxx" https://api.browserstack.com/automate/projects.json

get all builds
curl -u "xxx:xxx" https://api.browserstack.com/automate/builds.json

get running build ids:
curl -u "xxx:xxx" https://api.browserstack.com/automate/builds.json | jq '.[] | .automation_build | select(.status == "running") | .hashed_id'

get all sessions from one build:
curl -u "xxx:xxx" https://api.browserstack.com/automate/builds/xxx/sessions.json

get all running sessions from one build
curl -u "xxx:xxx" https://api.browserstack.com/automate/builds/xxx/sessions.json | jq '.[] | .automation_session | select(.status == "running") | .hashed_id'

get info from one session:
curl -u "xxx:xxx" https://api.browserstack.com/automate/sessions/xxx.json

get public url for one session:
curl -u "xxx:xxx" https://api.browserstack.com/automate/sessions/xxx.json | jq '.automation_session | .public_url'

get selenium logs
curl -u "xxx:xxx" https://api.browserstack.com/automate/builds/xxx/sessions/xxx/seleniumlogs

---

example http video_url link:
https://automate.browserstack.com/sessions/xxx/video?token=xxx--xxx\u0026source=rest_api\u0026diff=11780.59423829

example https link to one session:
https://automate.browserstack.com/builds/xxx/sessions/xxx?auth_token=bccf74479f0156fbef2efeefcf5ab64b1ad9a1d7782249767b5334753d358165