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

Change the notification position to one of the following options:
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

Customize the close animation by choosing from the following options:
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

Customize the open animation by choosing from the following options:
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

<hr>

``loader`` :<br>

You can choose whether to display the loader or not by changing the loader value to false or true.

**Property** | **Type** | **Default**
:--- | :--- | :---
``loader`` | _boolean_ | true

<hr>

``loaderPosition`` :<br>

You can set the loader position to either top or bottom.

**Property** | **Type** | **Default**
:--- | :--- | :---
``loaderPosition`` | _string_ | 'top'

<hr>

``delay`` : <br>

You can set the delay time in **(milliseconds)** by change this property value.

**Property** | **Type** | **Default**
:--- | :--- | :---
``delay`` | _number_ | 3000

<hr>

``auto`` :<br>

Automatically remove the notification after the specified delay time expires.

**Property** | **Type** | **Default**
:--- | :--- | :---
``auto`` | _boolean_ | true

<hr>

``iconHeader`` :<br>

You can remove the default **icon header** by change the property value to false.

**Property** | **Type** | **Default**
:--- | :--- | :---
``iconHeader`` | _boolean_ | true

<img src="https://raw.githubusercontent.com/91ahmed/nostfly/refs/heads/main/nostfly.png?token=GHSAT0AAAAAAC5L4OY3Q3CHG2NUMHPLQ3XEZ5QJCLA" style="width:300px;margin:auto;display:block">
