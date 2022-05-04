import tkinter as tk
from screeninfo import get_monitors
for m in get_monitors():
    print(str(m))

class DisplayScreen(tk.Tk):
    def __init__(self):
        self.tempFlag = False
        super(DisplayScreen, self).__init__()
        self.fullscreen()
        self.bind("<Escape>", self.fullscreen_exit)
        self.title("Mirror Screen Opstions")
        self.config(bg='#3f4563')
        for m in get_monitors():
            objx=int(m.width/3)
            objy=int(m.height/3)
        options=[0,1,2]
        self.grid_columnconfigure(options,weight=objx)
        self.grid_rowconfigure(options,weight=objy)
        self.TopLable = tk.Label(self, text="Choose A Display", font=('8514oem', 50, 'bold'),bg='#3f4563',fg='#4ed3bb')
        self.TopLable.grid(row=0,column=0,columnspan=3)
        self.screen =[0,1,2,3,4,5]
        for x in range(0,len(self.screen)):
            self.screen[x]= tk.Button(self, text="Screen", font=('8514oem', 25, 'bold'),bg='#3f4563',fg='#4ed3bb')
            self.screen[x].config(text="Screen"+str(x+1),command= lambda: self.screen(x))
            self.screen[x].grid(row=1+int(x/3), column=(x%3),sticky='wens',padx=4,pady=4)


    def fullscreen(self,event=None):
        self.attributes("-fullscreen", True)

    def fullscreen_exit(self,event=None):
        self.attributes("-fullscreen", False)

if __name__=="__main__":
    try:
        root = DisplayScreen()
        root.mainloop()
    except KeyboardInterrupt:
        exit()