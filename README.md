# nostfly

### Install
```html
<!-- add css file -->
<link rel="stylesheet" href="nostfly.css">

<!-- add js file -->
<script src="nostfly.js"></script>
```

### Example
```javascript
new Nostfly ({
    style: 'warning',
    position: 'top-right',
    header: 'Your header here',
    content: 'Your content here',
    delay: 5000
})
```

### Properties 
``style`` :<br>
You can select the style that suits you from these options:
- warning
- success
- error
- attention
- notify
- note

**Property** | **Type** | **Default**
:--- | :--- | :---
``style`` | _string_ | 'notify'

**e.g**
```javascript
new Nostfly({
    style: 'success'
})
```
