// Copyright (c) 2016 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var NetworkPointerEvent = module.exports = function NetworkPointerEvent(id, x, y) {
		this.id = id;
		this.x = x;
		this.y = y;
	};

	NetworkPointerEvent.EVENT_NAME = "server_pointer_event";

	NetworkPointerEvent.fromSerializableObject = function fromSerializableObject(obj) {
		return new NetworkPointerEvent(obj.id, obj.x, obj.y);
	};

	NetworkPointerEvent.prototype.toSerializableObject = function toSerializableObject() {
		return {
			id: this.id,
			x: this.x,
			y: this.y
		};
	};

}());