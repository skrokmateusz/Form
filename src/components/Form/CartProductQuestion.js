import { Fragment } from "react"
import { useDispatch } from "react-redux"
import { navActions } from '../../store/navigation'

import Card from "../UI/Card"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import Button from "../UI/Button"
import MainProductQuestion from "../Layout/MainProductQuestion"

import classes from './CartProductQuestion.module.css'

const CartProductQuestion = props => {
	const dispatch = useDispatch()
	const previousPageHandler = () => {
		dispatch(navActions.navToHomePage())
	}

	const nextPageHandler = props => {
		dispatch(navActions.navToSubmissionCart())
	}

	return (
		<Fragment>
			<Card>
				<Header onClickOne={previousPageHandler} classNameTwo={classes['active-two']} normalTitle="Pytanie dotyczące produktu, składników, itd." highlightedTitle="Dane produktowe" />
                <MainProductQuestion />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousPageHandler} title="" className={classes['back-button']}/>
				<Button onClick={nextPageHandler} title="Następny krok" />
			</Footer>
		</Fragment>
	)
}

export default CartProductQuestion