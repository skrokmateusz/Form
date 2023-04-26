import Input from '../UI/Input'

import classes from './MainProductComplain.module.css'

const MainSubmission = props => {
	return (
		<main>
			<form>	
				<Input className={classes.inputs} label="Imię i nazwisko *" input={{ type: 'text' }} />
				<Input className={classes.inputs} label="Adres e-mail *" input={{ type: 'text' }} />
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</form>
		</main>
	)
}

export default MainSubmission
