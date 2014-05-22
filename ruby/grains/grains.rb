class Grains
  def initialize
    build_grains
  end
  def square(id)
    @grains[id]
  end
  def total
    @grains.values.reduce(:+)
  end
  def build_grains
    @grains = {1 => 1}
    (2..64).each{|n| @grains[n] = @grains[n-1] * 2 }
  end
end