import { useAPI } from './ApiContext/ApiContext'
import AdminApp from './components/apps/AdminApp'
import ClientApp from './components/apps/ClientApp'
import CarrierApp from './components/apps/CarrierApp'

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
