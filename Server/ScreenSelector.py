import tkinter as tk


class DisplayScreen(tk.Tk):
    def __init__(self):
        self.tempFlag = False
        super(DisplayScreen, self).__init__()
        self.title("Mirror Screen Opstions")
        self.fullscreen()
        self.bind("<Escape>", self.fullscreen_exit)
        self.TopLable = tk.Label(self, text="Display", font=('8514oem', 25, 'bold'))
        self.TopLable.grid(row=0,column=0,columnspan=5,pady=10)


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