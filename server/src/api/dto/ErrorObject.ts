class ErrorObject extends Error {
	public message: string;
	public code: number;
	public data: any;
	public stack: string;

	DEFAULT_CODE = 500;

	constructor(message = 'Unknown Error') {
		super(message);
		this.code = this.DEFAULT_CODE;
		this.message = message;
		this.data = null;
	}

	setError(errorCode, message = null, data = null) {
		this.code = errorCode;
		this.message = message;
		this.data = data;
		return this;
	}

	setCode(errorCode) {
		this.code = errorCode;
		return this;
	}

	setMessage(message) {
		this.message = message;
		return this;
	}

	setData(data) {
		this.data = data;
		return this;
	}

	getStack() {
		return this.stack;
	}
}


module.exports = ErrorObject;