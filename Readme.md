# Header Converter

Easily convert headers to JS format.

### Usage
```
    Header - lists commands
    Header -c - converts headers to JS format
    Header -h - shows help menu
```

#### Example
After pasting your headers, make sure to press "Ctrl + C", to confirm input. 
```diff
    Header -c
    
    Paste Headers here: 
        :authority: www.footlocker.com
        :method: GET
        :path: /api/products/pdp/GY5601?timestamp=1623702716598
        :scheme: https
        accept: application/json
        accept-encoding: gzip, deflate, br
        accept-language: en-US,en;q=0.9
        referer: https://www.footlocker.com/product/reebok-question-low-boys-grade-school/GY5601.html
        sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
        sec-ch-ua-mobile: ?0
        sec-fetch-dest: empty
        sec-fetch-mode: cors
        sec-fetch-site: same-origin
        user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36
        x-fl-request-id: 8ff10560-cd4f-11eb-85cc-d78280af2166
        x-flapi-session-id: 16bv3y2hjtw3i1tn9zlm3atidq.fzcexflapipdb618883
        
        ----Formatted Headers----

        ":authority": "www.footlocker.com",
        ":method": "GET",
        ":path": "/api/products/pdp/GY5601?timestamp=1623702716598",
        ":scheme": "https",
        "accept": "application/json",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "referer": "https://www.footlocker.com/product/reebok-question-low-boys-grade-school/GY5601.html",
        "sec-ch-ua": "" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
        "x-fl-request-id": "8ff10560-cd4f-11eb-85cc-d78280af2166",
        "x-flapi-session-id": "16bv3y2hjtw3i1tn9zlm3atidq.fzcexflapipdb618883",
```

### Credits
CLI - [Cutty72](https://github.com/Cutty72) ([@72_cutty](https://twitter.com/72_cutty))
<br>
Converter - [IdekDude](https://github.com/IdekDude) - group: ([@kronozdev](https://twitter.com/kronozdev))  