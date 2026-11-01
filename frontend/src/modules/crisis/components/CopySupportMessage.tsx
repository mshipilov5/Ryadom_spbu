'use client';

import { useState } from 'react';

export function CopySupportMessage({ message }: { message: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="crisisMessageBox">
      <p className="crisisMessageText">{message}</p>
      <div className="crisisMessageActions">
        <button type="button" className="crisisSecondaryButton" onClick={copyMessage}>
          Скопировать сообщение
        </button>
        <span className="crisisCopyStatus" aria-live="polite">
          {status === 'copied' && 'Сообщение скопировано'}
          {status === 'error' && 'Не удалось скопировать. Выделите текст вручную.'}
        </span>
      </div>
    </div>
  );
}
