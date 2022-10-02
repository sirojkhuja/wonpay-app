import { useAPI } from '../../context'
import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

function App() {
    const { user } = useAPI();
    let currentUser = user ? user.user : JSON.parse(localStorage.getItem('user'));
    
    if(currentUser) {
        localStorage.setItem('user', JSON.stringify(currentUser))

        if(['admin', 'superadmin'].includes(currentUser.role)) {
            return  <AdminApp />
        }
        if(currentUser.role === 'carrier') {
            return <CarrierApp />
        }

        if(currentUser.role === 'client') {
            return <ClientApp />
        }
    }
}

export default App;
