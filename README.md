# Nostfly

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
    header: 'Your header here', // accept html
    content: 'Your content here', // accept html
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
<br>

> **Note:** You can add your own custom close animation class instead of using the available ones.

<br>

**e.g**
```javascript
new Nostfly({
    closeAnimate: 'your-custom-close-class'
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

<br>

> **Note:** You can add your own custom open animation class instead of using the available ones.

<br>

**e.g**
```javascript
new Nostfly({
    openAnimate: 'your-custom-open-class'
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
``delay`` | _number_ | 4000

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

**e.g**
```javascript
new Nostfly({
    iconHeader: false,
    header: 'Your New Header'
})
```

<hr>

``class`` :<br>

This property allow you to add a custom **CSS** class to the notification container.

**Property** | **Type** | **Default**
:--- | :--- | :---
``class`` | _string_ | null

<hr>

### Full Example
```javascript
new Nostfly ({
    style: 'attention',
    class: 'custom-class',
    position: 'bottom-right',
    closeAnimate: 'nostfly-close-slide-right',
    openAnimate: 'nostfly-open-slide-right',
    background: '#F85525',
    color:'#FBFAF2',
    iconHeader: true,
    header: 'Hello Geist', // accept html
    content: 'Please reach me out as soon as possible.', // accept html
    auto: true,
    loader: true,
    delay: 6000
})
```

<img src="https://github.com/91ahmed/nostfly/blob/v1.0/nostfly.png?raw=true" style="width:300px;margin:auto;display:block">
