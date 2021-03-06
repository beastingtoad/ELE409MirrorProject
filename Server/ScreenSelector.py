import tkinter as tk
from screeninfo import get_monitors


class DisplayScreen(tk.Tk):
    """
    this class sets up a full screen window with 6 screens to select ftom using tk
    """

    def __init__(self):
        """
        sets up the screen with a fullscreen tk interface with 6 buttons and a lable on the top
        """
        self.tempFlag = False
        super(DisplayScreen, self).__init__()
        self.fullscreen()
        self.bind("<Escape>", self.fullscreen_exit)
        self.title("Mirror Screen Opstions")
        self.config(bg='#3f4563')
        self.SetScreen = [True, False, False, False, False, False]
        for m in get_monitors():
            objx = int(m.width / 3)
            objy = int(m.height / 3)
        options = [0, 1, 2]
        self.grid_columnconfigure(options, weight=objx)
        options = [0, 1, 2, 3, 4]
        self.grid_rowconfigure(options, weight=objy)
        self.TopLable = tk.Label(self, text="Choose A Display", font=('8514oem', 50, 'bold'), bg='#3f4563',fg='#4ed3bb')
        self.TopLable.grid(row=0, column=0, columnspan=3)
        self.screen = [0, 1, 2, 3, 4, 5]
        self.outline= [0, 1, 2, 3, 4, 5]
        for n,x in enumerate(self.screen): #n is the index #x is the object
            self.outline[n] = tk.Frame(self,bg= '#3f4563') if n!=0 else tk.Frame(self,bg= '#4ed3bb')
            x = tk.Button(self.outline[n], text="Screen", font=('8514oem', 25, 'bold'), bg='#3f4563', fg='#4ed3bb')
            x.config(text="Screen" + str(n + 1), command= lambda n=n:self.screen_set(n),borderwidth=40,border=True,)
            x.pack(padx=4, pady=4,fill='both',expand=True)
            rmath=1 + int(n / 3)*2
            print(rmath)
            self.outline[n].grid(row = rmath, column = (n % 3),rowspan=2, sticky = 'wesn')

    def fullscreen(self, event=None):
        """
        sets screen to fullscreen
        """
        self.attributes("-fullscreen", True)

    def fullscreen_exit(self, event=None):
        """
        sets screen to exit fullscreen
        """
        self.attributes("-fullscreen", False)

    def screen_set(self, screennum: int):
        """
        used to selct what screen is important

        :param screennum: the screen pressed
        """
        for x in range(0, len(self.SetScreen)):
            self.SetScreen[x] = True if x == screennum else False
            self.outline[x].config(bg = '#4ed3bb' if x == screennum else '#3f4563')

    def retrive_screen_state(self) -> list[bool]:
        """
        used to retrive the list of screen states

        :return: a list of bools in order of the screens showing if they should be displayed or not
        """
        return self.SetScreen


if __name__ == "__main__":
    try:
        root = DisplayScreen()
        root.mainloop()
    except KeyboardInterrupt:
        exit()
