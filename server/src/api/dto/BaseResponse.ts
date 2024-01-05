class BaseResponse {
	public hasError: boolean;
	public code: number;
	public message: string;
	public data: any;

	DEFAULT_CODE = 200;

	constructor() {
		this.hasError = false;
		this.code = this.DEFAULT_CODE;
		this.message = null;
		this.data = null;
	}

	setError(errorCode, message = null) {
		this.hasError = true;
		this.code = errorCode;
		this.message = message;
		return this;
	}

	setCode(code) {
		this.code = code;
		return this;
	}

	setHasError(val) {
		this.hasError = val;
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

	getErrorStack() {
		return (new Error(`[${this.code}] ${this.message}`)).stack;
	}
}

module.exports = BaseResponse;