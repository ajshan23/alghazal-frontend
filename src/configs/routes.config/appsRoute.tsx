import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
    {
        key: 'apps.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        component: lazy(() => import('@/views/project/ProjectDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsEstimation.estimationList',
        path: `${APP_PREFIX_PATH}/estimation-list`,
        component: lazy(() => import('@/views/estimation/estimationlist/EstimationList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsEstimation.estimationCreation',
        path: `${APP_PREFIX_PATH}/create-estimation`,
        component: lazy(() => import('@/views/estimation/estimationcreation/EstimationCreations')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsEstimation.estimationView',
        path: `${APP_PREFIX_PATH}/estimation/:id`,
        component: lazy(() => import('@/views/estimation/estimationView/EstimationView')),
        authority: [ADMIN, USER],
    },
    
    

]

export default appsRoute
