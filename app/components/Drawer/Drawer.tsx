'use client';
 
import { Drawer } from 'vaul';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
 
export default function VaulDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
       <VisuallyHidden.Root>
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
            <div className="p-4 bg-white">
              <h1>Sorry to hear you didn't like the workout!</h1>
              <p>Do you mind providing feedback?</p>
            </div>
          </Drawer.Content>
       </VisuallyHidden.Root>
      </Drawer.Portal>
    </Drawer.Root>
  );
}