/**
 * Class representing a (Nostfly) Notification system.
 * 
 * @author Ahmed Hassan
 * @version 1.0
 * @date 2025-02-15
 *
 * @github: github.com/91ahmed
 * @website: 91ahmed.github.io
 */
class Nostfly 
{
	constructor (opt = {}) 
	{
		this.opt = opt
		this.opt.class ?? null
		this.opt.iconHeader ??= true
		this.opt.style ??= 'notify'
		this.opt.loader ??= true
		this.opt.loaderPosition ??= 'top'
		this.opt.content ??= 'We\'re glad to have you here. Enjoy your experience!'
		this.opt.position ??= 'top-right'
		this.opt.delay ??= 4000
		this.opt.header ??= null
		this.opt.auto ??= true
		this.opt.openAnimate ??= 'nostfly-open-slide-right'
		this.opt.closeAnimate ??= 'nostfly-close-slide-right'
		this.opt.background ??= null
		this.opt.color ??= null

		this.nostflyID = '_nostflyMessage-'+Math.random().toString(36).substring(2, 12)
		this.nostflyCloseID = '_nostflyClose-'+Math.random().toString(36).substring(2, 15)
		this.nostflyClass = '_nostflyMessage'

		this.nostflyMessage

		this.topRight
		this.topLeft
		this.topCenter
		this.bottomLeft
		this.bottomRight
		this.bottomCenter

		this.ids = {
			tl: '_nostflyContainerTopLeft',
			tr: '_nostflyContainerTopRight',
			tc: '_nostflyContainerTopCenter',
			bl: '_nostflyContainerBottomLeft',
			br: '_nostflyContainerBottomRight',
			bc: '_nostflyContainerBottomCenter',
		}

		this.classes = {
			container: '_nostflyContainer'
		}

		this.validate()
		this.createContainers()
		this.nostfly()
	}

	createContainers () 
	{
		if (this.isContainersExists() == false)
		{
			this.topLeft = document.createElement('div')
			this.topRight = document.createElement('div')
			this.topCenter = document.createElement('div')
			this.bottomLeft = document.createElement('div')
			this.bottomRight = document.createElement('div')
			this.bottomCenter = document.createElement('div')

			this.topLeft.setAttribute('id', this.ids.tl)
			this.topRight.setAttribute('id', this.ids.tr)
			this.topCenter.setAttribute('id', this.ids.tc)
			this.bottomLeft.setAttribute('id', this.ids.bl)
			this.bottomRight.setAttribute('id', this.ids.br)
			this.bottomCenter.setAttribute('id', this.ids.bc)		

			this.topLeft.setAttribute('class', this.classes.container)
			this.topRight.setAttribute('class', this.classes.container)
			this.topCenter.setAttribute('class', this.classes.container)
			this.bottomLeft.setAttribute('class', this.classes.container)
			this.bottomRight.setAttribute('class', this.classes.container)
			this.bottomCenter.setAttribute('class', this.classes.container)

			document.body.prepend(this.topLeft)
			document.body.prepend(this.topRight)
			document.body.prepend(this.topCenter)
			document.body.prepend(this.bottomLeft)
			document.body.prepend(this.bottomRight)
			document.body.prepend(this.bottomCenter)
		} 
		else 
		{
			this.topLeft = document.getElementById(this.ids.tl)
			this.topRight = document.getElementById(this.ids.tr)
			this.topCenter = document.getElementById(this.ids.tc)
			this.bottomLeft = document.getElementById(this.ids.bl)
			this.bottomRight = document.getElementById(this.ids.br)
			this.bottomCenter = document.getElementById(this.ids.bc)
		}
	}

	isContainersExists () 
	{
		if (document.getElementsByClassName(this.classes.container)[0]) {
			return true
		} else {
			return false
		}
	}

	nostfly () 
	{
		let container = this.topRight

		if (this.opt.position == 'top-right') {
			container = this.topRight
		} else if (this.opt.position == 'top-left') {
			container = this.topLeft
		} else if (this.opt.position == 'top-center') {
			container = this.topCenter
		} else if (this.opt.position == 'bottom-left') {
			container = this.bottomLeft
		} else if (this.opt.position == 'bottom-right') {
			container = this.bottomRight
		} else if (this.opt.position == 'bottom-center') {
			container = this.bottomCenter
		}

		// Append message
	    container.prepend(this.nostflyMsg())

	    // Hold message element ID
	    let message = document.getElementById(this.nostflyID)

	    // Add Style
	    this.nostflyStyle(message)

	    // Progress bar count down
	    if (this.opt.loader == true && this.opt.auto == true) {
	    	this.loaderCountDown(this.opt.delay, message)
	    } else {
	    	if (message.getElementsByClassName('_nostflyBar')[0]) {
	    		message.getElementsByClassName('_nostflyBar')[0].style.display = 'none'
	    		message.getElementsByClassName('_nostflyBar')[0].remove()
	    	}
	    }

	    // Loader Position
	    if (this.opt.loaderPosition == 'bottom') {
	    	message.getElementsByClassName('_nostflyBar')[0].style.top = 'inherit'
	    	message.getElementsByClassName('_nostflyBar')[0].style.bottom = 0
	    }

	    // add custom class
	    if (!this.opt.class == null || !this.opt.class == '') {
	    	message.classList.add(this.opt.class)
	    }

	   	// Show animation
	    message.classList.add(this.opt.openAnimate)

	    // Remove the message on clicking the close button
	    document.getElementById(this.nostflyCloseID).addEventListener('click', function () {
	    	this.nostflyRemoveMessage(this.nostflyID)
	    }.bind(this))

	    // Remove the message after the delay time
	    if (this.opt.auto == true) 
	    {
		    setTimeout (function () {
			    if (document.getElementById(this.nostflyID)) {
			    	this.nostflyRemoveMessage(this.nostflyID)
		    	}
		    }.bind(this), this.opt.delay)
	    }
	}

	nostflyMsg () 
	{
		this.nostflyMessage = document.createElement('div')
		this.nostflyMessage.setAttribute('id', this.nostflyID)
		this.nostflyMessage.setAttribute('class', this.nostflyClass)

		let header = ''
		let icon = ''

		if (this.opt.iconHeader == true) {
			icon = this.iconSvg()
		}

		if (this.opt.header !== null) {
			header = `<b class='_nostflyContentHeader'>${icon}${this.opt.header}</b>`
		}

		this.nostflyMessage.innerHTML = `
			<div class='_nostflyContent'>
				<div class='_nostflyBar'></div>
				${header}
				<p class='_nostflyContentBody'>${this.opt.content}</p>
			</div>
			<button type="button" class="_nostflyCloseBtn" id="${this.nostflyCloseID}">×</button>
		`
		return this.nostflyMessage
	}

	nostflyRemoveMessage (id) 
	{
		let message = document.getElementById(id)

		message.classList.remove(this.opt.openAnimate)
		message.classList.add(this.opt.closeAnimate)

		setTimeout (function () {
			message.style.display = 'none'
			message.remove()
		}.bind(message) , 500)
	}

	loaderCountDown (totalDuration, nostflyID) 
	{
	    let duration = totalDuration;
	    let step = totalDuration / 100; // Each step represents 1%

	    let timer = setTimeout(function updateCountdown() {
	        let percentage = Math.round((duration / totalDuration) * 100);

	        nostflyID.getElementsByClassName('_nostflyBar')[0].style.width = (percentage-7)+'%'

	        if (percentage > 0) {
	            duration -= step; // Reduce by 1%
	            timer = setTimeout(updateCountdown, step); // Delay by step duration
	        }
	    }, step);
	}

	validate () 
	{
		if (typeof this.opt.loader !== 'boolean') {
			throw new Error("Nostfly - Invalid type: 'loader' property value must be a boolean (true or false).")
		}			

		if (typeof this.opt.iconHeader !== 'boolean') {
			throw new Error("Nostfly - Invalid type: 'icon' property value must be a boolean (true or false).")
		}

		if (typeof this.opt.auto !== 'boolean') {
			throw new Error("Nostfly - Invalid type: 'auto' property value must be a boolean (true or false).")
		}		

		if (typeof this.opt.delay !== 'number') {
			throw new Error("Nostfly - Invalid type: 'delay' property value must be a number.")
		}

		if (!this.opt.background == null || !this.opt.background == '') {
			if (typeof this.opt.background !== 'string') {
				throw new Error("Nostfly - Invalid type: 'background' property value must be a string.")
			}
		}

		if (!this.opt.background == null || !this.opt.background == '') {
			if (typeof this.opt.color !== 'string') {
				throw new Error("Nostfly - Invalid type: 'color' property value must be a string.")
			}
		}

		let positions = [
			'top-right', 'top-left', 'top-center', 
			'bottom-right', 'bottom-left', 'bottom-center'
		]

		if (!positions.includes(this.opt.position)){
			throw new Error("Nostfly - Invalid value: 'position' property value is invalid.")
		}
	}

	nostflyStyle (message) 
	{
		let background = '#01204E'
		let color = '#EEEFC5'

		if (this.opt.style == 'success') {
			background = '#028391'
		} else if (this.opt.style == 'note') {
			background = '#F6DCAC'
			color = '#01204E'
		} else if (this.opt.style == 'warning') {
			background = '#FAA968'
			color = '#01204E'
		} else if (this.opt.style == 'attention') {
			background = '#F85525'
			color = '#FBFAF2'
		} else if (this.opt.style == 'error') {
			background = '#D52429'
			color = '#FBFAF2'
		}

		if (!this.opt.background == null || !this.opt.background == '') {
			background = this.opt.background
		}

		if (!this.opt.color == null || !this.opt.color == '') {
			color = this.opt.color
		}

		message.style.backgroundColor = background
		message.style.color = color
		message.getElementsByClassName('_nostflyCloseBtn')[0].style.color = color
		message.getElementsByClassName('_nostflyBar')[0].style.backgroundColor = color

		if (message.getElementsByTagName('a')[0])
		{
			let link = message.getElementsByTagName('a')

			for (let a = 0; a <= 0; a++) {
				link[a].style.color = color
			}
		}
	}

	iconSvg () 
	{
		if (this.opt.style == 'warning') {
			this.opt.header ??= 'Warning!'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223M12 8v4m0 4v.01"/></svg>'
		} else if (this.opt.style == 'error') {
			this.opt.header ??= 'Error!'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223M14 14l-4-4m0 4l4-4"/></svg>'
		} else if (this.opt.style == 'success') {
			this.opt.header ??= 'Success'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3m-3 9l2 2l4-4"/></svg>'
		} else if (this.opt.style == 'note') {
			this.opt.header = 'Note'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 4h6m-5 5H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-3 3z"/></svg>'
		} else if (this.opt.style == 'attention') {
			this.opt.header ??= 'Attention!'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.027 19.002a2 2 0 0 1-.65.444l-5.575 2.39a2.04 2.04 0 0 1-1.604 0l-5.575-2.39a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.103-.24.25-.457.433-.639m2.689-1.31l3.522-1.51a2.04 2.04 0 0 1 1.604 0l5.575 2.39c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-1.509 3.522M3 3l18 18"/></svg>'
		} else if (this.opt.style == 'notify') {
			this.opt.header ??= 'Notification!'
			return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1m6-10.273A11.05 11.05 0 0 0 18.206 3M3 6.727A11.05 11.05 0 0 1 5.792 3"/></svg>'
		}
	}
}


export default Nostfly