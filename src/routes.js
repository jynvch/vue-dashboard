import Login from './page/Login.vue'
import Index from './page/Index.vue'

import BackEnd from './page/BackEnd.vue'

import Monitoring from './page/Monitoring.vue'
import MonitoringMaps from './page/Monitoring/maps.vue'
import MonitoringList from './page/Monitoring/list.vue'

export default [
	{ path: '/', component: Login },
	{
		path: '/Index',
		component: Index,
		children: [{ path: '/BackEnd', component: BackEnd },
			{
				path: '/Monitoring',
				component: Monitoring,
				children: [{
					path: 'Maps',
					component: MonitoringMaps
				}, {
					path: 'List',
					component: MonitoringList
				}]
			}
		]
	}
]