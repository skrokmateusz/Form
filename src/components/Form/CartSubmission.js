import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../../store/navigation'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import MainSubmission from '../Layout/MainSubmission'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'

import classes from './CartSubmission.module.css'

const CartSubmission = props => {
	const dispatch = useDispatch()

	const submitFormHandler = event => {
		event.preventDefault()
	}

	const previousPageHandler = event => {
		event.preventDefault()
		dispatch(navActions.navToPreviousCart())
	}

	const mainPageHandler = () => {
		dispatch(navActions.navToHomePage())
		dispatch(navActions.navToPreviousCart())
	}

	return (
		<form>
			<Card>
				<Header
					classNameTwo={classes['active-two']}
					classNameThree={classes['active-three']}
					normalTitle={props.normalTitle}
					highlightedTitle="Dane kontaktowe"
					onClickOne={mainPageHandler}
					onClickTwo={previousPageHandler}
				/>
				<MainSubmission />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousPageHandler} title="" className={classes['back-button']} />
				<Button onClick={submitFormHandler} title="Wyślij formularz" />
			</Footer>
		</form>
	)
}

export default CartSubmission
