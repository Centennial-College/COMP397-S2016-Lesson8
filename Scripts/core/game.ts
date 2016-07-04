module objects {
	export class Person {
		// PRIVATE INSTANCE VARIABLES
		private _name: string;
		private _age: number;

		// CONSTRUCTORS ++++++++++++++++++++++++++++++++
		constructor(name: string, age: number) {
			this._name = name;
			this._age = age;
		}

		// PUBLIC METHODS +++++++++++++++++++++++++++++
		public Speak(): void {
			console.log(this._name + " says hello.");
		}
	}
}

function init(): void {
    console.log('Game Started Now!');
}

window.addEventListener("load", init);