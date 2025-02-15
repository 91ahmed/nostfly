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

<hr>

``position`` :<br>

You can change the notification position to one of the following options:
- top-right
- top-left
- top-center
- bottom-right
- bottom-left
- bottom-center

**Property** | **Type** | **Default**
:--- | :--- | :---
``position`` | _string_ | 'top-right'

**e.g**
```javascript
new Nostfly({
    position: 'bottom-right'
})
```

<hr>

``closeAnimate`` :<br>

You can customize the close animation by choosing from the following options:
- nostfly-close-slide-right
- nostfly-close-slide-left
- nostfly-close-slide-up
- nostfly-close-slide-down
- nostfly-close-fade

**Property** | **Type** | **Default**
:--- | :--- | :---
``closeAnimate`` | _string_ | 'nostfly-close-slide-right'

**e.g**
```javascript
new Nostfly({
    closeAnimate: 'nostfly-close-slide-up'
})
```

<hr>

``openAnimate`` :<br>

You can customize the open animation by choosing from the following options:
- nostfly-open-slide-right
- nostfly-open-slide-left
- nostfly-open-slide-up
- nostfly-open-slide-down
- nostfly-open-fade

**Property** | **Type** | **Default**
:--- | :--- | :---
``openAnimate`` | _string_ | 'nostfly-open-slide-right'

**e.g**
```javascript
new Nostfly({
    openAnimate: 'nostfly-open-slide-up'
})
```
