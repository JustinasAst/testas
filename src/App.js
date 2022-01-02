import React from 'react';

const languages = ['JavaScript', 'Python', 'Ruby', 'JAVA'];
const languageContext = React.createContext();

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languages,
			lanIndex: 0,
		};
	}

	toggleIndex = () => {
		this.setState((state) => ({
			lanIndex: state.languages.length > state.lanIndex + 1 ? state.lanIndex + 1 : 0,
		}));
	};

	render() {
		return (
			<>
				<languageContext.Provider
					value={{ language: this.state.languages[this.state.lanIndex], toggleIndex: this.toggleIndex }}
				>
					<MainSection />
				</languageContext.Provider>
			</>
		);
	}
}

class MainSection extends React.Component {
	static contextType = languageContext;

	render() {
		console.log(this.context);
		const changeLanguage = () => {
			this.context.toggleIndex();
		};

		return (
			<div>
				<p id='favoriteLanguage'>Favorite programing languoge: {this.context.language}</p>

				<button id='changeFavorite' onClick={changeLanguage}>
					Togle language
				</button>
			</div>
		);
	}
}
