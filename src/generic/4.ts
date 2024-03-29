/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Book {
	title;
}

class Component<T> {
	constructor(public props: T) {}
}

class Page extends Component<Boo> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};
