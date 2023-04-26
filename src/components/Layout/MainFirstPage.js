import classes from './MainFirstPage.module.css'

const MainFirstPage = props => {
	const choiceHandler = event => {
		const chosenBox = event.target.closest('div').id
		props.onChosenBox(chosenBox)
	}

	return (
		<main>
			<div onClick={choiceHandler} className={classes['choice-box']} id="complain">
				<i class="fa-sharp fa-solid fa-circle-exclamation"></i>
				<p>Reklamacja produktowa</p>
			</div>
			<div onClick={choiceHandler} className={classes['choice-box']} id="question">
				<i class="fa-sharp fa-solid fa-circle-question"></i>
				<p>Pytanie dotyczące produktu, składników, itd.</p>
			</div>
			<div onClick={choiceHandler} className={classes['choice-box']} id="comment">
				<i class="fa-sharp fa-solid fa-message"></i>
				<p>Opinie, sugestie dotyczące produktów</p>
			</div>
		</main>
	)
}

export default MainFirstPage
