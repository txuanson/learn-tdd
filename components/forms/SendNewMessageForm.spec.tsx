import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SendNewMessageForm from './SendNewMessageForm';

describe('<NewMessageForm />', () => {
  describe('clicking the send button', () => {
    async function sendMessage() {
      render(<SendNewMessageForm />);

      await userEvent.type(
        screen.getByTestId('messageText'),
        'New message',
      );
      await userEvent.click(screen.getByTestId('sendButton'));
    }

    it('clears the text field', async () => {
      await sendMessage();
      expect(screen.getByTestId<HTMLInputElement>('messageText').value).toEqual('');
    });

    it('the message appear on the screen', async () => {
      await sendMessage();
      expect(screen.findAllByText('New message'))
    })
  });
});