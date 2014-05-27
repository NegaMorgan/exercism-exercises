class Grains
  def initialize
    build_grains
  end
  def square(id)
    @grains[id-1]
  end
  def total
    @grains.reduce(:+)
  end
  def build_grains
    @grains = (1..64).map {|n| 1 << (n - 1)}
  end
end