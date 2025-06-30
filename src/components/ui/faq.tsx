"use client"
 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Faqs = () => {

  const faqItems = [
    {
            question: "What is BookmarkCat?",
    answer: "BookmarkCat is a smart bookmark manager browser extension that helps users organize and manage their bookmarks efficiently. It features automatic tag organization, quick search, and cloud sync capabilities."
    },
    {
        question: "What are the key features of BookmarkCat?",
        answer: "Key features include smart tag rules for automatic bookmark organization, quick search with Command+K/Ctrl+K, multiple views (All, Hot, Recent, Pinned), dark mode support, and cloud sync using GitHub Gist."
    },
    {
            question: "How do I access BookmarkCat quickly?",
    answer: "You can access BookmarkCat using the keyboard shortcut Command+B (Mac) or Alt+B (Windows) once the extension is installed and pinned to your browser toolbar."
    },
    {
        question: "Can I sync my bookmarks across devices?",
        answer: "Yes, BookmarkCat allows you to sync your bookmarks and settings across devices through GitHub Gist. Simply sign in with your GitHub account to enable sync functionality."
    },
    {
        question: "How do smart tags work in BookmarkCat?",
        answer: "Smart tags automatically categorize your bookmarks based on rules you create. These rules can match URL patterns or titles, helping you organize bookmarks without manual effort."
    },
    {
        question: "Is BookmarkCat available on mobile devices?",
        answer: "Currently, BookmarkCat is designed as a browser extension for desktop use. It works with major desktop browsers that support extensions."
    },
    {
        question: "How do I backup my bookmarks with BookmarkCat?",
        answer: "After signing in with GitHub, you can backup your bookmarks by clicking the backup button in settings. Your bookmarks will be securely stored in a GitHub Gist."
    },
    {
        question: "What views are available in BookmarkCat?",
        answer: "BookmarkCat offers multiple views: All (complete bookmark list), Hot (most visited), Recent (newly added), Pinned (important bookmarks), and Tag view (organized by tags)."
    },
    {
        question: "Does BookmarkCat support dark mode?",
        answer: "Yes, BookmarkCat includes built-in dark mode support. You can toggle between light and dark themes using the theme switch in the interface."
    },
    {
        question: "How secure is my bookmark data with BookmarkCat?",
        answer: "BookmarkCat prioritizes data security. Your bookmarks are stored locally in your browser and optionally in your personal GitHub Gist. No data is shared with third parties."
    }
];

  return (
    <div className="w-full bg-black text-white p-4 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
            <AccordionTrigger className="text-left font-medium hover:text-blue-400">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}