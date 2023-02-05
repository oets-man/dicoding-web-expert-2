import Detail from '../pages/detail';
import Favorite from '../pages/favorite';
import Home from '../pages/home';

const routes = {
	'/': Home, // default page
	'/home': Home,
	'/favorite': Favorite,
	'/detail/:id': Detail,
};

export default routes;
