import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import CareWorkerSide from '@/components/CareWorkerSide/CareWorkerSide'
import CaseInquiry from '@/components/CaseInquiry/CaseInquiry'
import DocOrderInquiry from '@/components/DocOrderInquiry/DocOrderInquiry'
import FeeInquiry from '@/components/FeeInquiry/FeeInquiry'
import MedicalTechInquiry from '@/components/MedicalTechInquiry/MedicalTechInquiry'
import NurseSide from '@/components/NurseSide/NurseSide'
import PatientSide from '@/components/PatientSide/PatientSide'
import SignsInquiry from '@/components/SignsInquiry/SignsInquiry'
import VoiceRecord from '@/components/VoiceRecord/VoiceRecord'
import DynamicMonitor from '@/components/DynamicMonitor/DynamicMonitor'
import PatientInfo from '@/components/PatientInfo/PatientInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/index/patientInfo',
      children: [
        {
          path: 'patientInfo',
          name: 'PatientInfo',
          component: PatientInfo
        },
        {
          path: 'careWorkerSide',
          name: 'CareWorkerSide',
          component: CareWorkerSide
        },
        {
          path: 'caseInquiry',
          name: 'CaseInquiry',
          component: CaseInquiry
        },
        {
          path: 'docOrderInquiry',
          name: 'DocOrderInquiry',
          component: DocOrderInquiry
        },
        {
          path: 'feeInquiry',
          name: 'FeeInquiry',
          component: FeeInquiry
        },
        {
          path: 'medicalTechInquiry',
          name: 'MedicalTechInquiry',
          component: MedicalTechInquiry
        },
        {
          path: 'nurseSide',
          name: 'NurseSide',
          component: NurseSide
        },
        {
          path: 'patientSide',
          name: 'PatientSide',
          component: PatientSide
        },
        {
          path: 'signsInquiry',
          name: 'SignsInquiry',
          component: SignsInquiry
        },
        {
          path: 'voiceRecord',
          name: 'VoiceRecord',
          component: VoiceRecord
        },
        {
          path: 'dynamicMonitor',
          name: 'DynamicMonitor',
          component: DynamicMonitor
        }
      ]
    }
  ]
})
