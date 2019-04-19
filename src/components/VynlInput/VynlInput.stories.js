import React from 'react';

import { storiesOf } from '@storybook/react';
import { VynlInput } from './VynlInput';
import { FormField } from '../FormField/FormField';
import { VynlTheming } from '../VynlTheming/VynlTheming';
import { VynlHint } from '../VynlHint/VynlHint';
import { VynlError } from '../VynlError/VynlError';
import { VynlLabel } from '../VynlLabel/VynlLabel';
import { VnylContainer } from '../VnylContainer/VnylContainer';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

storiesOf('VynlInput', module)
  .add('Input Default', () => (
    <VynlTheming>
      <VnylContainer>
        <div className='headline-input'>Input Default</div>
        <FormField hasError={true}>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlInput
            type='text'
            placeholder='email address'
            autoFocus=''
            autoComplete=''
            name='email'
          />
          <VynlError>This is an error message!</VynlError>
        </FormField>

        <FormField>
          <VynlInput
            type='password'
            placeholder='password'
            autoFocus=''
            autoComplete=''
            name='password'
          />
        </FormField>

        <FormField>
          <VynlInput
            type='text'
            placeholder='password'
            autoFocus=''
            autoComplete=''
            name='email'
            disabled={true}
          />
        </FormField>
      </VnylContainer>
    </VynlTheming>
  ))

  .add('Input with Icon', () => (
    <VynlTheming>
      <VnylContainer>
        <div className='headline-input'>Input with Icon</div>
        <FormField hasError={true}>
          <VynlLabel>Label</VynlLabel>
          <VynlHint>Optional</VynlHint>

          <VynlInput
            type='text'
            placeholder='email address'
            autoFocus=''
            autoComplete=''
            name='email'>
            <FontAwesomeIcon icon='heart' />
            <FontAwesomeIcon icon='heart' />
          </VynlInput>

          <VynlError>This is an error message!</VynlError>
        </FormField>
      </VnylContainer>
    </VynlTheming>
  ));

/*.add('Text Area', () => (
    <div className='page-section'>
      <div className='headline-input'>Text Area Default</div>

      <FormField>
        <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
      </FormField>
    </div>
  ))

  .add('Text Area with icon', () => (
    <div className='page-section'>
      <div className='headline-input'>Text Area with Icon</div>

      <FormField>
        <VynlTextArea type='text' placeholder='Type something' autoFocus='' />
      </FormField>
    </div>
  ))

  .add('Text Area Disabled', () => (
    <div className='page-section'>
      <div className='headline-input'>Text Area Disabled</div>

      <FormField>
        <VynlTextArea
          type='text'
          placeholder='Type something'
          autoFocus={false}
          disabled={true}
        />
      </FormField>
    </div>
  )); */
