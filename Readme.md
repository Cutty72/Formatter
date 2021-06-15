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

### Information
To use this as a command, it must be installed globally.
```
npm install -g headerconvert
```

### Credits
CLI - [Cutty72](https://github.com/Cutty72) ([@72_cutty](https://twitter.com/72_cutty))
<br>
Converter - [IdekDude](https://github.com/IdekDude) - group: ([@kronozdev](https://twitter.com/kronozdev))

## License
MIT License

Copyright (c) 2021 Kronoz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
