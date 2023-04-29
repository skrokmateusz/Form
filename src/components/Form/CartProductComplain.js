import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navActions } from '../../store/navigation'
import { valActions } from '../../store/validity'
// import { dataActions } from '../../store/data'

import Card from '../UI/Card'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Button from '../UI/Button'
import MainProductComplain from '../Layout/MainProductComplain'

import classes from './CartProductComplain.module.css'

const CartProductComplain = props => {
	const [isContentCorrect, setIsContentCorrect] = useState(false)

	const dispatch = useDispatch()

	const checkContent = content => {
		setIsContentCorrect(content)
	}

	const previousPageHandler = () => {
		dispatch(navActions.navToHomePage())
	}

	const nextPageHandler = () => {
		if (isContentCorrect) {
			dispatch(navActions.navToSubmissionCart())
			dispatch(valActions.buttonNextStepIsNotClicked())
			// dispatch(dataActions.addData())
		} else {
			dispatch(valActions.buttonNextStepIsClicked())
		}
	}
	
	// const checkValue = useSelector(state => state.data.flavour)
	// console.log(checkValue);

	return (
		<Fragment>
			<Card>
				<Header
					onClickOne={previousPageHandler}
					classNameTwo={classes['active-two']}
					normalTitle="Reklamacja produktowa"
					highlightedTitle="Dane produktowe"
				/>
				<MainProductComplain onCorrectContent={checkContent} />
			</Card>
			<Footer className={classes.footer}>
				<Button onClick={previousPageHandler} title="" className={classes['back-button']} />
				<Button onClick={nextPageHandler} title="Następny krok" />
			</Footer>
		</Fragment>
	)
}

export default CartProductComplain
