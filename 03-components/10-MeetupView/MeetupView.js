import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: {
      type: Object,
    }
  },


  template: `
    <div>
      <meetup-cover :title="meetup.title" :image="meetup.image"/>

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <meetup-description :description="meetup.description"/>

            <h2>Программа</h2>

            <meetup-agenda :agenda="meetup.agenda"/>

            <UiAlert v-if="meetup.agenda.length < 1" text="Программа пока пуста..."></UiAlert>

          </div>
          <div class="meetup__aside">

            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>

            <div class="meetup__aside-buttons"></div>

          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
