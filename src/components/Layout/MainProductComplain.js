import { useSelector } from 'react-redux'
import useInput from '../../hooks/use-input'

import Input from '../UI/Input'
import OptionInput from '../UI/OptionInput'
import DateInput from '../UI/DateInput'

import classes from './MainProductComplain.module.css'

const MainProductComplain = props => {
	const isNextStepClicked = useSelector(state => state.val.isNextStepButtonClicked)

	const {
		value: enteredFlavour,
		isValid: enteredFlavourIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasFlavourError, //do ustawienia klasy czy błędzie
		valueChangeHandler: flavourChangeHandler,
		inputBlurHandler: flavourBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredExpirationDate,
		isValid: enteredExpirationDateIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasExpirationDateError, //do ustawienia klasy czy błędzie
		valueChangeHandler: expirationDateChangeHandler,
		inputBlurHandler: expirationDateBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasMessageError, //do ustawienia klasy czy błędzie
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
	} = useInput(value => value !== '')

	const {
		value: enteredPurchasePlace,
		isValid: enteredPurchasePlaceIsValid, //tylko do sprawdzenia poprawności całego formularza
		hasError: hasPurchasePlaceError, //do ustawienia klasy czy błędzie
		valueChangeHandler: purchasePlaceChangeHandler,
		inputBlurHandler: purchasePlaceBlurHandler,
	} = useInput(value => value !== '')

	let isCorrectContent = false
	isCorrectContent =
		enteredFlavourIsValid && enteredExpirationDateIsValid && enteredMessageIsValid && enteredPurchasePlaceIsValid
	props.onCorrectContent(isCorrectContent)

	return (
		<main>
			<form>
				<div>
					<p>
						Odpowiedzi na poniższe pytania pozwolą nam na wyjaśnienie Pani / Pana zgłoszenia. Uprzejmie dziękujemy za
						poświęcony czas.
					</p>
				</div>
				<Input
					label="Nazwa / smak *"
					className={`${hasFlavourError ? classes.invalid : ''} ${
						isNextStepClicked && !enteredFlavourIsValid ? classes.invalid : ''
					}`}
					input={{
						type: 'text',
						id: 'flavour',
						value: enteredFlavour,
						onChange: flavourChangeHandler,
						onBlur: flavourBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasFlavourError || (isNextStepClicked && !enteredFlavour) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<Input
					label="Data ważności i numer partii *"
					className={`${hasExpirationDateError ? classes.invalid : ''} ${
						isNextStepClicked && !enteredExpirationDateIsValid ? classes.invalid : ''
					}`}
					input={{
						type: 'text',
						id: 'expiration-date',
						value: enteredExpirationDate,
						onChange: expirationDateChangeHandler,
						onBlur: expirationDateBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasExpirationDateError || (isNextStepClicked && !enteredExpirationDate) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<Input
					className={`${hasMessageError ? `${classes.invalid} ${classes.message}` : classes.message} ${
						isNextStepClicked && !enteredMessageIsValid
							? `${classes.invalid} ${classes.message}`
							: classes.message
					}`}
					label="Opis sytuacji *"
					input={{
						type: 'text',
						id: 'message',
						value: enteredMessage,
						onChange: messageChangeHandler,
						onBlur: messageBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasMessageError || (isNextStepClicked && !enteredMessage) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<Input
					className={`${hasPurchasePlaceError ? classes.invalid : ''} ${
						isNextStepClicked && !enteredPurchasePlaceIsValid ? classes.invalid : ''
					}`}
					label="Gdzie i kiedy zakupiono produkt*"
					input={{
						type: 'text',
						id: 'purchase-place',
						value: enteredPurchasePlace,
						onChange: purchasePlaceChangeHandler,
						onBlur: purchasePlaceBlurHandler,
					}}
				/>
				<div className={classes['invalid-input']}>
					{hasPurchasePlaceError || (isNextStepClicked && !enteredPurchasePlace) ? (
						<p>* Wypełnienie tego pola jest wymagane</p>
					) : (
						''
					)}
				</div>
				<OptionInput
					label="Czy zostało zachowane opakowanie"
					name="is-package"
					option1="tak, posiadam opakowanie wraz z produktem"
					option2="tak, posiadam puste opakowanie"
					option3="nie, posiadam tylko produkt"
					option4="nie, opakowanie z produktem zostało wyrzucone"
				/>
				<p>Aby kompleksowo i możliwe szybko odpowiedzieć na zgłoszenie prosimy o podanie dodatkowych informacji:</p>
				<OptionInput
					label="Rodzaj opakowania"
					name="package"
					option1="kartonik"
					option2="karton"
					option3="butelka szklana"
					option4="butelka plastikowa"
				/>
				<OptionInput
					label="Pojemność / gramatura"
					name="capacity"
					option1="25g"
					option2="100g"
					option3="120g"
					option4="1kg"
				/>
				<Input className={classes.inputs} label="Prosimy opisać stan opakowania" input={{ type: 'text' }} />
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany przed otwarciem"
					input={{ type: 'text' }}
				/>
				<DateInput label="Data pierwszego otwarcia produktu" input={{ type: 'date' }} />
				<Input
					className={classes.inputs}
					label="Gdzie i jak długo produkt był przechowywany po otwarciu"
					input={{ type: 'text' }}
				/>
				<DateInput label="Kiedy zauważono zmiany w produkcie" input={{ type: 'date' }} />
				<p>* Pola oznaczone gwiazdką są wymagane</p>
			</form>
		</main>
	)
}

export default MainProductComplain
