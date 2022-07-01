import torch

if torch.cuda.is_available() :
    print("True")

else:
    print("False")