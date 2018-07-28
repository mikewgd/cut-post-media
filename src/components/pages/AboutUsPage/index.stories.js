// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { AboutUsPage } from 'components'

storiesOf('AboutUsPage', module)
  .add('default', () => (
    <AboutUsPage />
  ))
