export interface Blog {
  title: string;
  publishDate: string;
  excerpt: string;
  tags: string[];
  slug: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    title: 'Passing the Hash with Mimikatz',
    publishDate: '2022-04-07',
    excerpt: "Mimikatz is well known to extract plaintexts, passwords, and hash from memory. In this article, I experimented and will walk you through how to use Mimikatz to obtain user passwords from a Windows machine. I'll also show you how to use Mimikatz in order to perform an attack called passing the hash (pth) to escalate your privileges and impersonate a user.",
    tags: ['Security'],
    slug: 'passing-the-hash-with-mimikatz',
    content: ''
  },
  {
    title: 'Capture the Flag Tools',
    publishDate: '2022-04-07',
    excerpt: "Back in university, I was a security nerd who took part in quite a few Capture the Flag (CTF) competitions. Here is a collection of helpful tools and links that helped me which I hope will be of use to you on your CTF journey.",
    tags: ['Security'],
    slug: 'capture-the-flag-tools',
    content: ''
  }
]
