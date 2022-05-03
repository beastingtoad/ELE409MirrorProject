import multiprocessing
import ScreenSelector
'''
This file should be set to start up on powering of device
'''

def setUpScreenselector():
    root=ScreenSelector.DisplayScreen()
    root.mainloop()

def setUpServer():
    """
    put code to call flask
    """
    pass

def startup():
    """
    This is used to start up the app
    """
    p1 = multiprocessing.Process(target=setUpScreenselector(), args=())
    p2 = multiprocessing.Process(target=setUpServer(), args=())
    p1.start()
    p2.start()
    p2.join()
    exit()

if __name__=="__main__":
    try:
        startup()
    except KeyboardInterrupt:
        exit()
