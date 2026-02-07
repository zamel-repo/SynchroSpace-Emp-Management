import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Message {
  senderId: string; // 'me' أو اسم الشخص أو 'group'
  receiverId: string; // اسم الشخص أو 'team'
  text: string;
  timestamp: Date;
  mention?: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  newMessage = signal('');
  showMentionList = signal(false);
  
  // نحدد من هو الطرف المختار حالياً (افتراضياً المجموعة العامة)
  selectedChat = signal({ name: 'Team Group', isGroup: true });

  teamMembers = signal([
    { name: 'Samer Jalal', status: 'online', avatar: 'S' },
    { name: 'Lina Ahmad', status: 'busy', avatar: 'L' },
    { name: 'Zaid Omar', status: 'online', avatar: 'Z' }
  ]);

  // مخزن الرسائل الشامل
  allMessages = signal<Message[]>([
    { senderId: 'Samer Jalal', receiverId: 'team', text: 'Welcome everyone to the team chat!', timestamp: new Date(), mention: '' },
    { senderId: 'me', receiverId: 'Samer Jalal', text: 'Hi Samer, I have a private question.', timestamp: new Date() }
  ]);

  // تصفية الرسائل لعرض ما يخص المحادثة المختارة فقط
  displayMessages = () => {
    const chat = this.selectedChat();
    return this.allMessages().filter(m => 
      chat.isGroup ? m.receiverId === 'team' : 
      (m.receiverId === chat.name && m.senderId === 'me') || (m.receiverId === 'me' && m.senderId === chat.name)
    );
  };

  selectChat(name: string, isGroup: boolean) {
    this.selectedChat.set({ name, isGroup });
  }

  onInputChange(val: string) {
    // الـ Tag يعمل فقط في المجموعة العامة
    this.showMentionList.set(this.selectedChat().isGroup && val.endsWith('@'));
  }

  insertMention(name: string) {
    this.newMessage.update(curr => curr + name + ' ');
    this.showMentionList.set(false);
  }

  sendMessage() {
    if (!this.newMessage().trim()) return;

    const chat = this.selectedChat();
    const newMsg: Message = {
      senderId: 'me',
      receiverId: chat.isGroup ? 'team' : chat.name,
      text: this.newMessage(),
      timestamp: new Date()
    };

    this.allMessages.update(prev => [...prev, newMsg]);
    this.newMessage.set('');
  }
}