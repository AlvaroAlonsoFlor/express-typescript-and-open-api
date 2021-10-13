import ApiServer from './src/ApiServer'
import mainApiRoutes from './src/routes/mainApiRoutes'

const mainApi = new ApiServer('main-api', 8080, '/api/v1', mainApiRoutes)

mainApi.start()