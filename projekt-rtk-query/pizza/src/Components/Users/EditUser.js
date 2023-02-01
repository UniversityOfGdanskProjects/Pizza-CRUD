import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from '../../app/store/userListApi-slice'
import EditUserForm from './EditUserForm'
import { useGetUsersQuery } from '../../app/store/userListApi-slice'

const EditUser = () => {

  useGetUsersQuery()

    const { id } = useParams()

    const user = useSelector(state => selectUserById(state, id))

    const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>

    return content
}
export default EditUser