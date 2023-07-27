class Animal:
    def make_sound(self):
        print("Generic animal sound")


class Dog(Animal):
    def make_sound(self):
        print("Bark")


class Cat(Animal):
    def make_sound(self):
        print("Meow")


def animal_sound_in_zoo(animal):
    animal.make_sound()


def main():
    dog = Dog()
    cat = Cat()

    print("Dog in the zoo:")
    animal_sound_in_zoo(dog)

    print("\nCat in the zoo:")
    animal_sound_in_zoo(cat)


if __name__ == "__main__":
    main()
