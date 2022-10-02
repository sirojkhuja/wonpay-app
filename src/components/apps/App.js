import { useAPI } from '../../context/ApiContext'
import AdminApp from './AdminApp'
import ClientApp from './ClientApp'
import CarrierApp from './CarrierApp'

function App() {
    const { user } = useAPI();
    if(user) {
        if(['admin', 'superadmin'].includes(user.user.role)) {
            return  <AdminApp />
        }
        if(user.user.role === 'carrier') {
            return <CarrierApp />
        }

        if(user.user.role === 'client') {
            return <ClientApp />
        }
    }
}

export default App;
