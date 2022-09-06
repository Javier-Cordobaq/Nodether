import { useDispatch } from 'react-redux'
import { getStepInfoByKey } from '../../../redux/actions'
import { NavSteps } from '../styled-components'

const StepsNav = ({info}) => {

    const dispatch = useDispatch()

  return (
    <NavSteps onClick={() => dispatch(getStepInfoByKey(info))}>
        <p>{info}</p>
    </NavSteps>
  )
}

export default StepsNav